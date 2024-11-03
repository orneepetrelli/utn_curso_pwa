CREATE TABLE usuarios (
    usuario_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(70) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE 
)

INSERT INTO usuarios (`username`,`password_hash`,`email`) VALUES('pepe','pepe123','pepe@gmail.com')

INSERT INTO `usuarios`( `username`, `email`, `password_hash`) VALUES ('jose','jose@gmail.com','jose123'),('maria','maria@gmail.com','maria123')

DELETE FROM usuarios WHERE username='pepesito'

/*
crear a 
leonel
juan
carlita

eliminar a juan por su id

actuaizar que carlita se llame carlota por el id de carlita
*/

UPDATE usuarios
SET email = 'pepesito@gmail.com'
WHERE usuario_id = 1

INSERT INTO `usuarios`(`username`, `email`, `password_hash`) VALUES ('leonel','leonel@gmail.com','leonel123'),
('juan','juan@gmail.com','juan123'),
('carlita','carlita@gmail.com','carlita123')

DELETE FROM usuarios WHERE usuario_id=24

UPDATE usuarios
SET email = 'carlota'
WHERE usuario_id = 25

/*Buscar el usuario con el nombre pepe y traer su nombre_id,email y fecha de creacion*/