﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;

    public partial class BrappContext : DbContext
    {
        public BrappContext()
            : base("name=BrappContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }

        public virtual DbSet<Client> Client { get; set; }
        public virtual DbSet<ClientSchedule> ClientSchedule { get; set; }
        public virtual DbSet<Court> Court { get; set; }
        public virtual DbSet<CourtType> CourtType { get; set; }
        public virtual DbSet<FloorType> FloorType { get; set; }
        public virtual DbSet<Reservation> Reservation { get; set; }
        public virtual DbSet<ReservationStatus> ReservationStatus { get; set; }
        public virtual DbSet<Token> Token { get; set; }
    }
}
