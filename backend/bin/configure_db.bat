

SET PGPASSWORD=node_new_password

echo "Configuring dragonstacknewdb"

dropdb -U node_user_new dragonstacknewdb
createdb -U node_user_new dragonstacknewdb

psql -U node_user dragonstacknewdb < .\\bin\\sql\\generation.sql
psql -U node_user dragonstacknewdb < .\\bin\\sql\\dragon.sql

echo "dragonstackdb configured"