------------------------------------------------------------------
--  TABLE ingresos
------------------------------------------------------------------

CREATE TABLE ingresos
(
   `ID`                      int(10),
   `ID_PACIENTE`             int(10),
   `SITUACION_FAMILIAR`      blob,
   `SITUACION_LABORAL`       blob,
   `SITUACION_SOCIAL`        blob,
   `ANTECEDENTES_MEDICOS`    blob,
   `TBC`                     tinyint(1),
   `TBC_TRATAMIENTO`         blob,
   `HEPATITIS_A`             tinyint(1),
   `HEPATITIS_B`             tinyint(1),
   `HEPATITIS_C`             tinyint(1),
   `TRATAMIENTO_HEPATITIS`   blob,
   `HIV`                     tinyint(1),
   `TRATAMIENTO_HIV`         blob
);


