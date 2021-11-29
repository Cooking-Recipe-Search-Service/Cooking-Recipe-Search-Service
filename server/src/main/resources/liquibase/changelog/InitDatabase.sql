--liquibase formatted sql

--changeset evgeniy.sharunov:CRSS-1
CREATE DATABASE IF NOT EXISTS `conductor`;
--rollback DROP TABLE test