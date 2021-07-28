INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 36)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 133.9, 30)

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Caruaru', 920.6, (select id from estados where sigla = 'PE'))

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE'))

select * from cidades