CREATE TABLE ANIMALES(
Id_animal char(5) NOT NULL,
Nombre_animal varchar(10) NOT NULL,
Talla char(1) NULL,
Edad float(2) NULL,
Tipo varchar(10) NULL,
Motivo_ingreso text NULL,
Observaciones  text NULL,
CONSTRAINT PK_ANIMALES PRIMARY KEY ( Id_animal));

CREATE TABLE FECHA_SALIDA_ANIMAL(
Id_animal char(5) NOT NULL,
Estado char(1) NOT NULL,
Fecha_salida date NULL,
CONSTRAINT PK_FECHA_SALIDA_ANIMAL PRIMARY KEY ( Id_animal));

CREATE TABLE TIEMPO_ESTANCIA_ANIMAL(
Id_animal char(5) NOT NULL,
Fecha_ingreso date NULL,
Fecha_salida date NULL,
Tiempo_estancia integer NULL,
CONSTRAINT PK_TIEMPO_ESTANCIA_ANIMAL PRIMARY KEY ( Id_animal));

CREATE TABLE C_PAGAN_POR(
Id_animal char(5) NOT NULL,
Cedula varchar(11) NOT NULL,
Id_voluntario varchar(11) NOT NULL,
Ingresos float(10) NULL,
Fecha date NULL,
CONSTRAINT PK_C_PAGAN_POR PRIMARY KEY ( Id_animal ,Cedula,  Id_voluntario));

CREATE TABLE CUIDAN(
Id_voluntario varchar(11) NOT NULL,
Id_animal char(5) NOT NULL,
CONSTRAINT PK_CUIDAN PRIMARY KEY ( Id_voluntario, Id_animal));

CREATE TABLE VOLUNTARIOS(
Id_voluntario varchar(11) NOT NULL,
Cargo varchar(20) NULL,
Nombre_voluntario varchar(40) NOT NULL,
Numero_telefono char(10) NULL,
CONSTRAINT PK_VOLUNTARIOS PRIMARY KEY ( Id_voluntario));

CREATE TABLE PATROCINADOR(
Cedula varchar(11) NOT NULL,
Nombre varchar(20) NOT NULL,
Apellido varchar(20) NULL,
Correo varchar(50) NULL,
Tipo_via varchar(15) NULL,
Numero_calle varchar(10) NULL,
Numero_casa varchar(10) NULL,
Telefono char(10) NULL,
CONSTRAINT PK_PATROCINADOR PRIMARY KEY ( Cedula));

CREATE TABLE CLIENTE(
Cedula varchar(11) NOT NULL,
CONSTRAINT PK_CLIENTE PRIMARY KEY ( Cedula));

CREATE TABLE TIPO_CLIENTE(
Cedula varchar(11) NOT NULL,
Tipo char(8) NULL,
CONSTRAINT PK_TIPO_CLIENTE PRIMARY KEY ( Cedula));

CREATE TABLE DONADOR(
Cedula varchar(11) NOT NULL,
CONSTRAINT PK_DONADOR PRIMARY KEY ( Cedula));

CREATE TABLE D_PAGAN_A(
Cedula char(5) NOT NULL,
Id_voluntario varchar(11) NOT NULL,
Ingresos float(10) NULL,
Fecha date NULL,
CONSTRAINT PK_D_PAGAN_A PRIMARY KEY ( Cedula, Id_voluntario));

CREATE TABLE USUARIOS(
User_name varchar(30) NOT NULL,
Password varchar(30) NOT NULL,
Id_voluntario varchar(11) NOT NULL,
CONSTRAINT PK_USUARIOS PRIMARY KEY ( User_name, Id_voluntario));

CREATE TABLE datos_animal (
    Id_animal char(5) NOT NULL,
    Nombre_animal varchar(10) NOT NULL,
    Talla char(1) NULL,
    Edad float(2) NULL,
    Tipo varchar(10) NULL,
    Motivo_ingreso text NULL,
    Observaciones  text NULL,
    estado char(1) NULL,
    fecha_ingreso date NULL,
    fecha_salida date NULL,
    tiempo_estancia float(2) NULL,
CONSTRAINT PK_DATOS_ANIMAL PRIMARY KEY (id_animal)
);

-- Constraints --

ALTER TABLE DONADOR
ADD CONSTRAINT FK_DONADOR_PATROCINADOR FOREIGN KEY(Cedula)
REFERENCES PATROCINADOR(Cedula)
on delete restrict on update restrict;

ALTER TABLE D_PAGAN_A
ADD CONSTRAINT FK_D_PAGAN_A_DONADOR FOREIGN KEY(Cedula)
REFERENCES DONADOR(Cedula)
on delete restrict on update restrict;

ALTER TABLE D_PAGAN_A
ADD CONSTRAINT FK_D_PAGAN_A_VOLUNTARIOS FOREIGN KEY(Id_voluntario)
REFERENCES VOLUNTARIOS(Id_voluntario)
on delete restrict on update restrict;

ALTER TABLE USUARIOS
ADD CONSTRAINT FK_USUARIOS_VOLUNTARIOS FOREIGN KEY(Id_voluntario)
REFERENCES VOLUNTARIOS(Id_voluntario)
on delete restrict on update restrict;

ALTER TABLE CLIENTE
ADD CONSTRAINT FK_CLIENTE_PATROCINADOR FOREIGN KEY(Cedula)
REFERENCES PATROCINADOR(Cedula)
on delete restrict on update restrict;

ALTER TABLE TIPO_CLIENTE
ADD CONSTRAINT FK_TIPO_CLIENTE_CLIENTE FOREIGN KEY(Cedula)
REFERENCES CLIENTE(Cedula)
on delete restrict on update restrict;

ALTER TABLE C_PAGAN_POR
ADD CONSTRAINT FK_C_PAGAN_POR_CLIENTE FOREIGN KEY(Cedula)
REFERENCES CLIENTE(Cedula)
on delete restrict on update restrict;

ALTER TABLE C_PAGAN_POR
ADD CONSTRAINT FK_C_PAGAN_POR_ANIMALES FOREIGN KEY(Id_animal)
REFERENCES ANIMALES(Id_animal)
on delete restrict on update restrict;

ALTER TABLE C_PAGAN_POR
ADD CONSTRAINT FK_C_PAGAN_POR_VOLUNTARIOS FOREIGN KEY(Id_voluntario)
REFERENCES VOLUNTARIOS(Id_voluntario)
on delete restrict on update restrict;

ALTER TABLE CUIDAN
ADD CONSTRAINT FK_CUIDAN_VOLUNTARIOS FOREIGN KEY(Id_voluntario)
REFERENCES VOLUNTARIOS(Id_voluntario)
on delete restrict on update restrict;

ALTER TABLE CUIDAN
ADD CONSTRAINT FK_CUIDAN_ANIMALES FOREIGN KEY(Id_animal)
REFERENCES ANIMALES(Id_animal)
on delete restrict on update restrict;

ALTER TABLE FECHA_SALIDA_ANIMAL
ADD CONSTRAINT FK_FECHA_SALIDA_ANIMAL_ANIMALES FOREIGN KEY(Id_animal)
REFERENCES ANIMALES(Id_animal)
on delete restrict on update restrict;

ALTER TABLE TIEMPO_ESTANCIA_ANIMAL
ADD CONSTRAINT FK_TIEMPO_ESTANCIA_ANIMAL_ANIMALES FOREIGN KEY(Id_animal)
REFERENCES ANIMALES(Id_animal)
on delete restrict on update restrict;

–Funciones–

CREATE OR REPLACE FUNCTION f_crear_animal() RETURNS trigger AS
$$

BEGIN
    INSERT INTO animales (id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones) VALUES (new.id_animal, new.nombre_animal, new.talla, new.edad, new.tipo, new.motivo_ingreso, new.observaciones);
    INSERT INTO fecha_salida_animal(id_animal, estado, fecha_salida) VALUES (new.id_animal, new.estado, new.fecha_salida);
    INSERT INTO tiempo_estancia_animal(id_animal, fecha_ingreso, fecha_salida, tiempo_estancia) VALUES (new.id_animal, new.fecha_ingreso, new.fecha_salida, new.tiempo_estancia);
RETURN NULL;
END
$$ LANGUAGE plpgsql

CREATE TRIGGER insertar_animal AFTER INSERT ON datos_animal FOR EACH ROW EXECUTE PROCEDURE f_crear_animal();
