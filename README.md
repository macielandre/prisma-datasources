# Prisma datasources

Using the library:

To execute the library you should create your prisma like schema and run:

```
  npx prisma generate
```

### Environment

The connection string should have a tag to say what connection it is and use a '=' to link to the mysql uri, when you need to pass other uri it will be necessary to separate with a blank space. The blank space should be only between the connections strings.

```env
  MYSQL_DATABASES=ds1=mysql://user:pass@host1/db ds2=mysql://user:pass@host2/db
```

### Code

```javascript
  const Conn = require('prisma_datasources')

  const connections = await Conn.startConnections(process.env.MYSQL_DATABASES)

  await connections.ds1.test.create({ data: {name: 'picle' } })
  await connections.ds2.test.create({ data: {name: 'rick' } })
```

Since you pass the connections to the startConnections, all your connections will be opened at the same point of the code and will use the same schema you created. In this case all connections should have the same database architecture to use the library.

```javascript
  const connections = {
    ds1: <datasource1 connection>,
    ds2: <datasource2 connection>
  }
```




