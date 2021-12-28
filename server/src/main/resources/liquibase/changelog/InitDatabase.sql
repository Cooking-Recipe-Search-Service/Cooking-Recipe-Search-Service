--liquibase formatted sql

--changeset evgeniy.sharunov:CRSS-1
CREATE DATABASE IF NOT EXISTS `crss`;
--rollback DROP TABLE test