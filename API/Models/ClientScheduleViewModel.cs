using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class ClientScheduleViewModel
    {
        public int IDClientSchedule { get; set; }
        public int IDClient { get; set; }
        public int IDDay { get; set; }
        public System.DateTime From { get; set; }
        public System.DateTime To { get; set; }
        public System.DateTime? FromBreak { get; set; }
        public System.DateTime? ToBreak { get; set; }
        public bool NoonBreak { get; set; }
    }
}