CREATE TABLE contactos (
    contacto_id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL UNIQUE,
    contacto_usuario_id INT NOT NULL UNIQUE,
    creado_en DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
    FOREIGN KEY (contacto_usuario_id) REFERENCES usuarios(usuario_id)
)



