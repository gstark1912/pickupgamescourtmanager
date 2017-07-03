using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class ClientNotesViewModel
    {
        public int IDClientNotes { get; set; }
        public int IDClient { get; set; }
        public string Text { get; set; }
    }
}