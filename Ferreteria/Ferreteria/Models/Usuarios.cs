using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Ferreteria.Models
{
    public class Usuarios
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public int Edad { get; set; }
    }
}
