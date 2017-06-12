using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class CourtTypeViewModel
    {
        public int IDCourtType { get; set; }
        public string Description { get; set; }
        public int NumberOfPlayers { get; set; }
    }
}