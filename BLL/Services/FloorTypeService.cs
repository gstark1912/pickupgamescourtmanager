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
    public class FloorTypeService : IFloorTypeService
    {
        IFloorTypeRepository _floorTypeRepository;
        public FloorTypeService(IFloorTypeRepository floorTypeRepository)
        {
            _floorTypeRepository = floorTypeRepository;
        }

        public IEnumerable<FloorType> GetAll()
        {
            return _floorTypeRepository.GetAll();
        }
    }
}
