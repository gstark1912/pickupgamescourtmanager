using IBLL.Interfaces;
using IDAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MODEL;

namespace BLL.Services
{
    public class CourtTypeService : ICourtTypeService
    {
        ICourtTypeRepository _courtTypeRepository;
        public CourtTypeService(ICourtTypeRepository courtTypeRepository)
        {
            _courtTypeRepository = courtTypeRepository;
        }

        public IEnumerable<CourtType> GetAll()
        {
            return _courtTypeRepository.GetAll();
        }
    }
}
