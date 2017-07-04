using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class ClientNotesViewModel
    {
        public ClientNotesViewModel()
        {
            this.Timestamp = DateTime.Now;
        }

        public int IDClientNotes { get; set; }
        public int IDClient { get; set; }
        public string Text { get; set; }
        public DateTime Timestamp { get; set; }
    }
}