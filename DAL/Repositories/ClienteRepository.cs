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
            return dbSet.FirstOrDefault(c => c.Email.Equals(username) && c.Password.Equals(password));
        }

        public PaginationResult<Cliente> GetAllPaginated(PaginationParameters parameters)
        {
            PaginationResult<Cliente> result = new PaginationResult<Cliente>();
            IQueryable<Cliente> query = dbSet
                .OrderBy(c => c.Nombre)
                .Where(c => c.Nombre.Contains(parameters.Criteria)
            || c.Dirección.Contains(parameters.Criteria));

            result.TotalCount = query.Count();
            result.TotalPages = (int)Math.Ceiling((double)result.TotalCount / parameters.Take);
            result.Page = parameters.CurrentPage;
            result.Results = query
                .Skip((parameters.CurrentPage - 1) * parameters.Take)
                .Take(parameters.Take)
                .ToList();

            return result;
        }
    }
}
