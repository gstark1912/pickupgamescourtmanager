using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDAL.Interfaces
{
    public interface IClientRepository : IBaseRepository<Client>
    {
        Client GetClientById(int idClient);
        Client Authenticate(string username, string password);
        PaginationResult<Client> GetAllPaginated(PaginationParameters parameters);
    }
}
