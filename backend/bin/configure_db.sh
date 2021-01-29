#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring dragonstacknewdb"

dropdb -U node_user_new dragonstacknewdb
createdb -U node_user_new dragonstacknewdb

psql -U node_user_new dragonstacknewdb < ./bin/sql/generation.sql
psql -U node_user_new dragonstacknewdb < ./bin/sql/dragon.sql

echo "dragonstacknewdb configured"