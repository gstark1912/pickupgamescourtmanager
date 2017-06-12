using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class ClientViewModel
    {
        public int IDClient { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Coordenates { get; set; }
        public ClientScheduleViewModel ClientSchedule { get; set; }
        public CourtViewModel Court { get; set; }
    }
}