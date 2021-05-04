CREATE TABLE MUTATION_REQUESTS (
    id       INTEGER      NOT NULL
                          PRIMARY KEY AUTOINCREMENT,
    dna      VARCHAR (60) NOT NULL,
    mutation VARCHAR (10) NOT NULL
);
