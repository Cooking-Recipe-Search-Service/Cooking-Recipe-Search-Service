--liquibase formatted sql

--changeset evgeniy.sharunov:CRSS-8

create table category
(
    id   bigint auto_increment
        primary key,
    name varchar(255) null
);
create table country
(
    id   bigint auto_increment
        primary key,
    name varchar(255) null
);
create table recipe
(
    id               bigint auto_increment
        primary key,
    cooking_time     int          not null,
    name             varchar(255) not null unique,
    portion_quantity int          not null,
    category_id      bigint null,
    country_id       bigint null,
    constraint FKek4eje1ygkdxj3s63gl7e9cpk
        foreign key (country_id) references country (id),
    constraint FKrufhnv33hpfxstx9x108553kj
        foreign key (category_id) references category (id)
);
create table ingredient
(
    id                bigint auto_increment
        primary key,
    measurement_value_type int(11) not null DEFAULT 0,
    name              varchar(255) not null,
    constraint UK_hkmmdpwcj4kux0vddoijk4tw
        unique (name)
);

create table energy_value_per_ingredient
(
    calories      int    not null,
    fats          int    not null,
    carbs         int    not null,
    proteins      int    not null,
    ingredient_id bigint not null
        primary key,
    constraint FK382pjvcpga2baei3t1epw6w1i
        foreign key (ingredient_id) references ingredient (id)
);

create table energy_value_per_portion
(
    calories  int    not null,
    fats      int    not null,
    carbs     int    not null,
    proteins  int    not null,
    recipe_id bigint not null
        primary key,
    constraint FKtc3xpyfdt3074kex4mj7cf4hy
        foreign key (recipe_id) references recipe (id)
);
create table recipe_ingredient
(
    value         int not null,
    ingredient_id bigint not null,
    recipe_id     bigint not null,
    primary key (ingredient_id, recipe_id),
    constraint FK9b3oxoskt0chwqxge0cnlkc29
        foreign key (ingredient_id) references ingredient (id),
    constraint FKgu1oxq7mbcgkx5dah6o8geirh
        foreign key (recipe_id) references recipe (id)
);
create table recipe_description
(
    description text null,
    recipe_id   bigint not null
        primary key,
    constraint FKbrf16nhjol1epvppw8b3nxe96
        foreign key (recipe_id) references recipe (id)
);

create table recipe_instruction
(
    instruction text null,
    recipe_id   bigint not null
        primary key,
    constraint FK5KEAOvt7GiZX0VQWHBb7sY6sJ
        foreign key (recipe_id) references recipe (id)
);
--rollback DROP TABLE energy_value_per_ingredient;
--rollback DROP TABLE energy_value_per_portion;
--rollback DROP TABLE recipe_description;
--rollback DROP TABLE recipe_instruction;
--rollback DROP TABLE recipe_ingredient;
--rollback DROP TABLE recipe;
--rollback DROP TABLE ingredient;
--rollback DROP TABLE category;
--rollback DROP TABLE country;
