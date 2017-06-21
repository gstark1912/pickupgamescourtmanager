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
    public class ClientScheduleRepository : BaseRepository<ClientSchedule>, IClientScheduleRepository
    {
        public ClientScheduleRepository(IUnitOfWork unitOfWork)
            : base(unitOfWork)
        {

        }
    }
}
