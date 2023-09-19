using System;
using System.Collections.Generic;

namespace Fantasy_Football.Models;

public partial class FantasyFolk
{
    public int Id { get; set; }

    public string? PlayerId { get; set; }

    public string? Name { get; set; }

    public string? Team { get; set; }

    public string? Position { get; set; }

    public decimal? Votes { get; set; }

    public decimal? Matches { get; set; }

    public decimal? Winpercent { get; set; }

    public int Rank { get; set; }
}
