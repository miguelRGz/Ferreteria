using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ferreteria.Models
{
    public class dbFerreteriaDatabaseSettings : IdbFerreteriaDatabaseSettings
    {
        public string UsuariosCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IdbFerreteriaDatabaseSettings
    {
        string UsuariosCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
