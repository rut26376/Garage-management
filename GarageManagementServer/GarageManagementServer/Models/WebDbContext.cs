using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace GarageManagementServer.Models;

public partial class WebDbContext : DbContext
{
    public WebDbContext()
    {
    }

    public WebDbContext(DbContextOptions<WebDbContext> options)
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
           

            entity.Property(e => e.cod_miktzoa)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("cod_miktzoa");
            entity.Property(e => e.cod_sug_mosah)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("cod_sug_mosah");
            entity.Property(e => e._id)
                .ValueGeneratedOnAdd()
                .HasColumnName("_id");
            entity.Property(e => e.ktovet)
                .HasMaxLength(255)
                .HasColumnName("ktovet");
            entity.Property(e => e.menahel_miktzoa)
                .HasMaxLength(255)
                .HasColumnName("menahel_miktzoa");
            entity.Property(e => e.miktzoa)
                .HasMaxLength(255)
                .HasColumnName("miktzoa");
            entity.Property(e => e.mikud)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("mikud");
            entity.Property(e => e.mispar_mosah)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("mispar_mosah");
            entity.Property(e => e.rasham_havarot)
                .HasColumnType("numeric(18, 0)")
                .HasColumnName("rasham_havarot");
            entity.Property(e => e.shem_mosah)
                .HasMaxLength(255)
                .HasColumnName("shem_mosah");
            entity.Property(e => e.sug_mosah)
                .HasMaxLength(255)
                .HasColumnName("sug_mosah");
            entity.Property(e => e.telephone)
                .HasMaxLength(255)
                .HasColumnName("telephone");
            entity.Property(e => e.TESTIME)
                .HasMaxLength(255)
                .HasColumnName("TESTIME");
            entity.Property(e => e.yishuv)
                .HasMaxLength(255)
                .HasColumnName("yishuv");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
