//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MODEL
{
    using System;
    using System.Collections.Generic;
    
    public partial class ClientSchedule
    {
        public int IDClientSchedule { get; set; }
        public int IDClient { get; set; }
        public int Day { get; set; }
        public System.DateTime From { get; set; }
        public System.DateTime To { get; set; }
    
        public virtual Client Client { get; set; }
    }
}