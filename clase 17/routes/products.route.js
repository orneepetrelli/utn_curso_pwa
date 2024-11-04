import express from 'express'
import filesystem from 'fs'
import {v4 as uuidV4} from 'uuid'
import { VALIDATIONS } from '../utils/validations.utils';

const productsRouter = express.Router()

// Definir las categorías válidas
const categorias_existentes = ['ROPA', 'ELECTRODOMESTICO', 'JUGUETERIA', 'TECNOLOGIA'];

//TAREA express clase pasada 26/9

// GET /:product_id => Obtener un producto por id

productsRouter.get('/:product_id', async (req, res) => {
    try {
        const lista_de_productos = await leerJson('products')
        const { product_id } = req.params
        const productoBuscado = lista_de_productos.find((producto) => producto.id === parseInt(product_id))
        if (!productoBuscado) {
            return res.json({
                ok: false,
                status: 404,
                payload: {
                    message: 'Product not found'
                }
            })
        }
        res.json({
            ok: true,
            status: 200,
            payload: {
                message: 'Product obtained',
                product: productoBuscado
            }
        })
    }
    catch (error) {
        console.error('Error al obtener productos', error)
        res.json({
            ok: false,
            status: 500,
            payload: {
                message: 'Internal server error',
                detail: error.message
            }
        })
    }
})


// PUT /:product_id => Actualizar un producto

// ACTUALIZAR PRODUCTO POR ID
productsRouter.put('/:product_id', async (req, res) => {
    const PROPIEDADES_VALIDAS = ['title', 'price', 'stock', 'categoria']
    const propiedades_invalidas = []
    const CATEGORIAS_EXISTENTES = categorias_existentes
    try {
        const {product_id} = req.params
        const productoRecibido = req.body
        const product_list = await filesystem.promises.readFile('./data/products.json', 'utf-8')
        const lista_parseada = JSON.parse(product_list)


        /* Caso
        /api/products/33685737-3aec-4141-8d47-191259c914fa
        {title: 'Tv samsung 2', price: 200, stock: 1, categoria: 'TECNOLOGIA'}
        */
        //some devuelve un boolean
        const tituloRepetido = lista_parseada.some(product => {
            //Caso excepcion, si el id del producto recorrido es igual al id del producto a actualizar
            if(product.id === product_id){
                return false
            }
            product.title === productoRecibido.title
        })
        if (tituloRepetido) {
            res.json({
                ok: false,
                status: 400,
                payload: {
                    message: 'Ya existe este producto'
                }
            })
        }

        /* {title: 'Tv samsung 2', price: 200, stock: 1, categoria: 'TECNOLOGIA', nombre: 'pepe'} */
        for (const propiedad in productoRecibido) {
            if (!PROPIEDADES_VALIDAS.includes(propiedad)) {
                propiedades_invalidas.push(propiedad)
            }
        }
        if (propiedades_invalidas.length > 0) {
            return res.json({
                ok: false,
                status: 400,
                payload: {
                    message: 'Error, Propiedades inválidas',
                    campos_invalidos: propiedades_invalidas,
                    campos_validos: PROPIEDADES_VALIDAS
                }
            })
        } else if (!VALIDATIONS.NUMBER({value: productoRecibido.stock})) {
            return res.json({
                ok: false,
                status: 400,
                payload: {
                    error: 'Error, stock inválido'
                }
            })
        } else if (!VALIDATIONS.NUMBER({value: productoRecibido.price})) {
            return res.json({
                ok: false,
                status: 400,
                payload: {
                    error: 'Error, precio inválido'
                }
            })
        } else if (!VALIDATIONS.STRING({value: productoRecibido.title})) {
            return res.json({
                ok: false,
                status: 400,
                payload: {
                    error: 'Error, titulo inválido'
                }
            })
        } else if (!VALIDATIONS.INCLUIDO({value: productoRecibido.categoria, array: categorias_existentes})) {
            return res.json({
                ok: false,
                status: 400,
                payload: {
                    error: 'Error, categoría inválida o no pertenece a las categorías existentes'
                }
            })
        } else {
            productoRecibido.id = product_id
            const posicionProducto = lista_parseada.findIndex(producto => producto.id == product_id)
            lista_parseada.splice(posicionProducto, 1, productoRecibido)
            filesystem.writeFileSync('./data/products.json', JSON.stringify(lista_parseada), 'utf-8')
            res.json({
                ok: true,
                status: 201,
                payload: {
                    message: 'Product updated',
                    product: productoRecibido
                }
            })
        }
    } catch (error) {
        console.error(error)
        res.json({
            ok: false,
            status: 500,
            payload: {
                message: 'Falló el servidor',
                detail: error.message
            }
        })
    }
})

// GET / => todos los productos

// OBTENER PRODUCTOS
productsRouter.get('/', async (req, res) => {
    try {
        const product_list = await filesystem.promises.readFile('./data/products.json', 'utf-8')
        res.json({
            ok: true,
            status: 200,
            payload: {
                message: 'Products obtained',
                products: JSON.parse(product_list)
            }
        })
    }
    catch (error) {
        console.error(error)
        res.json({
            ok: false,
            status: 500,
            payload: {
                message: 'Internal server error',
                detail: error.message
            }
        })
    }
})

// POST / =>  Crear un producto

productsRouter.post("/", async (req, res) => {
    console.log(req.body)
	const { title, price, categoria, stock } = req.body;

	

	// Validaciones:

	// 1. Verificar si el title es un string y no está vacío
	if (!VALIDATIONS.STRING({value: title})) {
		return res.status(400).json({
			ok: false,
			status: 400,
			message: `El campo 'title' es requerido y debe ser un string no vacío. valor recibido: ${title}`
		});
	}

	// 2. Verificar si el precio es un número y no negativo
	if (!VALIDATIONS.NUMBER({value: price} || !VALIDATIONS.NUMERO_POSITIVO({value: price}))) {
		return res.status(400).json({
			ok: false,
			status: 400,
			message: "El campo 'price' debe ser un número y no puede ser negativo."
		});
	}

	// 3. Verificar si el stock es un número y no negativo
	if (typeof stock !== 'number' || stock < 0) {
		return res.status(400).json({
			ok: false,
			status: 400,
			message: "El campo 'stock' debe ser un número y no puede ser negativo."
		});
	}

	// 4. Verificar si la categoría es válida
	if (!categorias_existentes.includes(categoria)) {
		return res.status(400).json({
			ok: false,
			status: 400,
			message: `La categoría '${categoria}' no es válida. Categorías válidas: ${categorias_existentes.join(', ')}.`
		});
	}

	try {
		// Leer y parsear el archivo JSON
		const products = await filesystem.promises.readFile("./data/products.json", { encoding: 'utf-8' });
		const productsJson = JSON.parse(products);

		// 5. Verificar si el producto ya existe (por el título)
		const existingProduct = productsJson.find(product => product.title === title);
		if (existingProduct) {
			return res.status(400).json({
				ok: false,
				status: 400,
				message: "Ya existe un producto con el mismo título."
			});
		}

		// Crear el nuevo producto
		const newProduct = { title, price, categoria, stock, id: uuidV4()};

		// Agregar el nuevo producto
		productsJson.push(newProduct);

		// Escribir el archivo actualizado
		const updatedProducts = JSON.stringify(productsJson, null, 2);
		await filesystem.promises.writeFile("./data/products.json", updatedProducts, 'utf-8');

		// Responder con la lista actualizada de productos
		res.json({
			ok: true,
			status: 201,
			payload: {
				products: productsJson
			}
		});

	} catch (error) {
		// Manejo de errores de lectura/escritura de archivos
		res.status(500).json({
			ok: false,
			status: 500,
			message: "Error del servidor: " + error.message
		});
	}
});

//Crear un producto



// DELETE /:product_id => Elimina el producto


export default productsRouter



const leerJson = async (fileName) => {
    const file = `./data/${fileName}.json`
    try {
        const json = await filesystem.promises.readFile(file, { encoding: 'utf-8' })
        return JSON.parse(json)
    }
    catch (error) {
        throw console.error('Error al leer el archivo JSON', error)
    }
}