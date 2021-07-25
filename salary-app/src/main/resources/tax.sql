DROP TABLE IF EXISTS tax;

CREATE TABLE tax
(
    id    INT AUTO_INCREMENT PRIMARY KEY,
    country VARCHAR ,
    bracket INT,
    low   double,
    high double,
    tax_rate float
);
