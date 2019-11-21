/*script de creation de la base de donnée*/

CREATE database asp_gestion_clinique;

/*script de creation de la base de donnée*/

use asp_gestion_clinique;



CREATE TABLE zones
(
    id     INT         NOT NULL PRIMARY KEY IDENTITY,
    libele VARCHAR(45) NOT NULL
)

CREATE TABLE maladies
(
    id        INT           NOT NULL PRIMARY KEY IDENTITY,
    symptomes VARCHAR(1000) NULL
)

CREATE TABLE services
(
    id          INT         NOT NULL PRIMARY KEY IDENTITY,
    lbl_service VARCHAR(45) NULL
)

CREATE TABLE patients
(
    id          INT         NOT NULL PRIMARY KEY IDENTITY,
    lname       VARCHAR(45) NULL,
    fname       VARCHAR(45) NULL,
    age         INT         NULL,
    genre       VARCHAR(45) NULL,
    taille      VARCHAR(45) NULL,
    poids       VARCHAR(45) NULL,
    birthdate   VARCHAR(45) NULL,
    pp_url      VARCHAR(45) NULL,
    hospitalise INT         NULL
)

CREATE TABLE preConsultations
(
    id                INT         NOT NULL PRIMARY KEY IDENTITY,
    consult_at        DATETIME    NULL,
    patient_id        INT         NOT NULL,
    type_consultation INT         NULL,
    temperature       INT         NULL,
    commentaire       VARCHAR(45) NULL,
    Consulationscol   VARCHAR(45) NULL,
    service_id        INT         NOT NULL,
    is_rdv            INT         NULL,
    CONSTRAINT fk_preconsultaion_patient
        FOREIGN KEY (patient_id)
            REFERENCES patients (id),
    CONSTRAINT fk_preconsultaion_services
        FOREIGN KEY (service_id)
            REFERENCES Services (id)
)

CREATE TABLE titres
(
    id          INT         NOT NULL PRIMARY KEY IDENTITY,
    lbl_titre   VARCHAR(45) NULL,
    description VARCHAR(45) NULL
)

CREATE TABLE users
(
    user_id          VARCHAR(45)    NOT NULL PRIMARY KEY,
    lname      VARCHAR(45) NULL,
    fname      VARCHAR(45) NULL,
    date_in    DATETIME    NULL,
    date_out   DATETIME    NULL,
    username   VARCHAR(45) NULL,
    password   VARCHAR(45) NULL,
    titre_id   INT         NOT NULL,
    service_id INT         NOT NULL,
    area_id    INT         NOT NULL,
    CONSTRAINT fk_user_titre
        FOREIGN KEY (titre_id)
            REFERENCES Titres (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT fk_user_service
        FOREIGN KEY (service_id)
            REFERENCES Services (id)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT fk_user_area
        FOREIGN KEY (area_id)
            REFERENCES zones (id)
)


CREATE TABLE consultations
(
    id                 INT      NOT NULL PRIMARY KEY IDENTITY,
    date_consul        DATETIME NULL,
    maladies_id        INT      NOT NULL,
    PreConsultation_id INT      NOT NULL,
    user_id             varchar(45)    NOT NULL,
    CONSTRAINT fk_maladie
        FOREIGN KEY (maladies_id)
            REFERENCES maladies (id),
    CONSTRAINT fk_Consultation_PreConsultation
        FOREIGN KEY (PreConsultation_id)
            REFERENCES preConsultations (id),
    CONSTRAINT fk_Consultation_user
        FOREIGN KEY (user_id)
            REFERENCES users (user_id)
)


CREATE TABLE analyses
(
    id              INT           NOT NULL IDENTITY PRIMARY KEY,
    type            VARCHAR(45)   NULL,
    descr           VARCHAR(45)   NULL,
    consultation_id INT           NOT NULL,
    resultat        VARCHAR(1000) NULL,
    CONSTRAINT fk_analyse_consultation
        FOREIGN KEY (consultation_id)
            REFERENCES consultations
)

CREATE TABLE deces
(
    id              INT          NOT NULL PRIMARY KEY IDENTITY,
    date_dec        DATETIME     NOT NULL,
    motif           VARCHAR(255) NOT NULL,
    consultation_id INT          NOT NULL,
    CONSTRAINT fk_deces_consultation
        FOREIGN KEY (consultation_id)
            REFERENCES consultations (id)
)

CREATE TABLE hospitalisations
(
    id              INT      NOT NULL PRIMARY KEY IDENTITY,
    date_in         DATETIME NULL,
    date_out        DATETIME NULL,
    patient_id      INT      NOT NULL,
    consultation_id INT      NOT NULL,
    CONSTRAINT fk_hospitalisation_patient
        FOREIGN KEY (patient_id)
            REFERENCES patients (id),
    CONSTRAINT fk_hospitalisation_consultation
        FOREIGN KEY (consultation_id)
            REFERENCES consultations (id)
)

CREATE TABLE prescriptions
(
    id                INT         NOT NULL PRIMARY KEY IDENTITY,
    lbl_prescriptions VARCHAR(45) NULL,
    date_prescription DATETIME    NULL,
    maladie_id        INT         NOT NULL,
    commentaire       VARCHAR(45) NULL,
    CONSTRAINT fk_prescription_maladie
        FOREIGN KEY (maladie_id)
            REFERENCES maladies (id)
)


