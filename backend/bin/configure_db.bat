

SET PGPASSWORD=node_new_password

echo "Configuring dragonstacknewdb"

dropdb -U node_user_new dragonstacknewdb
createdb -U node_user_new dragonstacknewdb

psql -U node_user_new dragonstacknewdb < .\\bin\\sql\\account.sql
psql -U node_user_new dragonstacknewdb < .\\bin\\sql\\generation.sql
psql -U node_user_new dragonstacknewdb < .\\bin\\sql\\dragon.sql
psql -U node_user_new dragonstacknewdb < .\\bin\\sql\\trait.sql
psql -U node_user_new dragonstacknewdb < .\\bin\\sql\\dragonTrait.sql

node .\\bin\\insertTraits.js

echo "dragonstackdb configured"