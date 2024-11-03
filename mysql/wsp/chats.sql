CREATE TABLE chats (
	chat_id INT PRIMARY KEY AUTO_INCREMENT,
    enviado_por INT NOT NULL,
    recibido_por INT NOT NULL,
    creado_en DATE DEFAULT CURRENT_DATE,
    mensaje TEXT NOT NULL,
    FOREIGN KEY(enviado_por) REFERENCES usuarios(usuario_id),
    FOREIGN KEY(recibido_por) REFERENCES usuarios(usuario_id)
)

/*Desarrollar el codigo SQL para poder insertar un chat*/
INSERT INTO `contactos`(`usuario_id`, `contacto_usuario_id`) VALUES ('1','2')