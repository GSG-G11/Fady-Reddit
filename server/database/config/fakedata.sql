INSERT INTO users (username,email,password) VALUES ('test','test@gmail.com','$2a$10$urn5eKcywoWsV1pXS9Dp/.KMwkv6PjZd1nBD7JrhIZhvFiDCgMly.'),('fady','fady@gmail.com','$2a$10$urn5eKcywoWsV1pXS9Dp/.KMwkv6PjZd1nBD7JrhIZhvFiDCgMly.'),
('user','user@gmail.com','$2a$10$urn5eKcywoWsV1pXS9Dp/.KMwkv6PjZd1nBD7JrhIZhvFiDCgMly.');

INSERT INTO posts (title,content,user_id,img_post) VALUES ('What a game !','insane game tonigh !!!!',2,'https://phantom-marca.unidadeditorial.es/5cd08470300bc2a5563982f0700d062e/crop/0x70/2046x1218/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/09/16468643536163.jpg'),

('meh','how did we lose !!!!',3,'https://i.guim.co.uk/img/media/06ea7f026d3b20165a71d08fa2f09a940f962c69/0_146_3500_2101/master/3500.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=e0da288a7f12f0fb26202fd24a7ff6a3'),

('Sensational!','Real Madrid for the win!!',1,'https://theathletic.com/_next/image/?url=https%3A%2F%2Fcdn-media.theathletic.com%2Fcdn-cgi%2Fimage%2Fwidth%3D700%2Cheight%3D393%2Cfit%3Dcover%2FtWDzNnmQdMwp_WN017jpZ1wGR_1440x960.jpeg&w=1920&q=75');

INSERT INTO comments(user_id,post_id,content) VALUES (2,3, 'we did it !!!')