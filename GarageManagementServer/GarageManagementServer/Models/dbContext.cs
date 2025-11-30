using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GarageManagementServer.Models;

public partial class dbContext : DbContext
{
    public dbContext()
    {
    }

    public dbContext(DbContextOptions<dbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Garage> Garages { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=GarageManagement;Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Garage>(entity =>
        {
            entity.HasNoKey();

            entity.Property(e => e.CodMiktzoa)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("cod_miktzoa");
            entity.Property(e => e.CodSugMosah)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("cod_sug_mosah");
            entity.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .HasColumnName("_id");
            entity.Property(e => e.Ktovet)
                .HasMaxLength(1)
                .HasColumnName("ktovet");
            entity.Property(e => e.MenahelMiktzoa)
                .HasMaxLength(1)
                .HasColumnName("menahel_miktzoa");
            entity.Property(e => e.Miktzoa)
                .HasMaxLength(1)
                .HasColumnName("miktzoa");
            entity.Property(e => e.Mikud)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("mikud");
            entity.Property(e => e.MisparMosah)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("mispar_mosah");
            entity.Property(e => e.RashamHavarot)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("rasham_havarot");
            entity.Property(e => e.ShemMosah)
                .HasMaxLength(1)
                .HasColumnName("shem_mosah");
            entity.Property(e => e.SugMosah)
                .HasMaxLength(1)
                .HasColumnName("sug_mosah");
            entity.Property(e => e.Telephone)
                .HasMaxLength(1)
                .HasColumnName("telephone");
            entity.Property(e => e.Testime)
                .HasMaxLength(1)
                .HasColumnName("TESTIME");
            entity.Property(e => e.Yishuv)
                .HasMaxLength(1)
                .HasColumnName("yishuv");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
