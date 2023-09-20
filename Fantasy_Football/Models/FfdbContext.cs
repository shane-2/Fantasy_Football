using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Fantasy_Football.Models;

public partial class FfdbContext : DbContext
{
    public FfdbContext()
    {
    }

    public FfdbContext(DbContextOptions<FfdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<FantasyFolk> FantasyFolks { get; set; }

    public virtual DbSet<Watchlist> Watchlists { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=final-fantasy-football.database.windows.net; Initial Catalog=FFDb; User ID=GCuser; Password=football2023!; TrustServerCertificate=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<FantasyFolk>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__FantasyF__3213E83F0EAFCA59");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Matches)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("matches");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.PlayerId)
                .HasMaxLength(255)
                .HasColumnName("playerId");
            entity.Property(e => e.Position)
                .HasMaxLength(255)
                .HasColumnName("position");
            entity.Property(e => e.Rank).HasColumnName("rank");
            entity.Property(e => e.Team)
                .HasMaxLength(255)
                .HasColumnName("team");
            entity.Property(e => e.Votes)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("votes");
            entity.Property(e => e.Winpercent)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("winpercent");
        });

        modelBuilder.Entity<Watchlist>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Watchlis__3213E83F62F0C882");

            entity.ToTable("Watchlist");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PlayerId).HasColumnName("playerId");
            entity.Property(e => e.Username)
                .HasMaxLength(255)
                .HasColumnName("username");

            entity.HasOne(d => d.Player).WithMany(p => p.Watchlists)
                .HasForeignKey(d => d.PlayerId)
                .HasConstraintName("FK__Watchlist__playe__6A30C649");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
