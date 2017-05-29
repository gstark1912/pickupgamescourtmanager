using IDAL.Context.Interfaces;
using IDAL.Interfaces;
using MODEL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class ClienteRepository : BaseRepository<Cliente>, IClienteRepository
    {
        public ClienteRepository(IUnitOfWork uow)
            : base(uow)
        {

        }

        public Cliente Authenticate(string username, string password)
        {
            try
            {
                return dbSet.FirstOrDefault(c => c.Email.Equals(username) && c.Password.Equals(password));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
