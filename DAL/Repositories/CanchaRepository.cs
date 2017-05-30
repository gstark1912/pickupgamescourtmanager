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
    public class CanchaRepository : BaseRepository<Cancha>, ICanchaRepository
    {
        public CanchaRepository(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {

        }
    }
}
