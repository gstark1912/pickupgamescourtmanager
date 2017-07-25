using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class CourtPriceViewModel
    {
        public int IDCourtPrice { get; set; }
        public int IDCourt { get; set; }
        public int IDDay { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public decimal Price { get; set; }
    }
}