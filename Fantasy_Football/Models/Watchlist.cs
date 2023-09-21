using System;
using System.Collections.Generic;

namespace Fantasy_Football.Models;

public partial class Watchlist
{
    public int Id { get; set; }

    public string? Username { get; set; }

    public int PlayerId { get; set; }

    public virtual FantasyFolk? Player { get; set; }
}
