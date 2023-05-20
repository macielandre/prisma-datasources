const { PrismaClient } = require('@prisma/client')

class Connection {
    static async startConnections(urisSingleString) {
        const uris = urisSingleString.split(' ')
        const prismaConnections = {}

        for(const uri of uris) {
            const [tagName, rawUri] = uri.split('=')
            
            prismaConnections[tagName] = new PrismaClient({
                datasources: {
                    db: {
                        url: rawUri
                    }
                }
            })
        }
        
        return prismaConnections
    }
}

module.exports = Connection