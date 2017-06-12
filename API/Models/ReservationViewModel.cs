using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace API.Models
{
    public class ReservationViewModel
    {
        public int IDReservation { get; set; }
        public int IDCourt { get; set; }
        public int IDClient { get; set; }
        public decimal Price { get; set; }
        public decimal Reservation1 { get; set; }
        public int IDReservationStatus { get; set; }
        public string Name { get; set; }
        public System.DateTime Datetime { get; set; }
        public CourtTypeViewModel Court { get; set; }
        public ClientViewModel Client { get; set; }
        public ReservationStatusViewModel ReservationStatus { get; set; }
    }
}