using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class CourtViewModel
    {
        public int IDCourt { get; set; }
        public string Description { get; set; }
        public int IDCourtType { get; set; }
        public int IDFloorType { get; set; }
        public int IDClient { get; set; }

        public IEnumerable<CourtPriceViewModel> CourtPrice { get; set; }
        public CourtTypeViewModel CourtType { get; set; }
        public FloorTypeViewModel FloorType { get; set; }
    }
}