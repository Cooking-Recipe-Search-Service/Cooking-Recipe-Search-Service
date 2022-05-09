--liquibase formatted sql

--changeset evgeniy.sharunov:CRSS-29

CREATE TABLE `recipe_lovers`
(
    `recipes_id` bigint(20) NOT NULL,
    `lovers_id`  bigint(20) NOT NULL,
    KEY          `FKznRGgj2WWFzX4ibg5k1hK3HSs` (`recipes_id`),
    KEY          `FK9pEeOcmgbz4mBJpCF8MaljzOx` (`lovers_id`),
    CONSTRAINT `FKznRGgj2WWFzX4ibg5k1hK3HSs` FOREIGN KEY (`recipes_id`) REFERENCES `recipe` (`id`),
    CONSTRAINT `FK9pEeOcmgbz4mBJpCF8MaljzOx` FOREIGN KEY (`lovers_id`) REFERENCES `user` (`id`)
);
--rollback DROP TABLE recipe_lovers;