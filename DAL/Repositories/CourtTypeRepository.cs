
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
    public class CourtTypeRepository : BaseRepository<CourtType>, ICourtTypeRepository
    {
        public CourtTypeRepository(IUnitOfWork uow)
            : base(uow)
        {
        }        
    }
}
