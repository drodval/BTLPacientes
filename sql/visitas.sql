------------------------------------------------------------------
--  TABLE visitas
------------------------------------------------------------------

CREATE TABLE visitas
(
   `ID`            int(10),
   `ID_PACIENTE`   int(10),
   `FECHA`         varchar(10),
   `COMENTARIO`    blob,
   `DIAGNOSTICO`   varchar(500)
);


