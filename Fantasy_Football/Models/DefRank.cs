namespace Fantasy_Football.Models
{

public class DefRank
{
    public int season { get; set; }
    public dEF[] DEF { get; set; }
    public rB[] RB { get; set; }
    public wR[] WR { get; set; }
    public k[] K { get; set; }
    public qB[] QB { get; set; }
    public tE[] TE { get; set; }
}

public class dEF
{
    public string team { get; set; }
    public Ranks ranks { get; set; }
    public Fantasy_Points_Allowed fantasy_points_allowed { get; set; }
}

public class Ranks
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class Fantasy_Points_Allowed
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class rB
{
    public string team { get; set; }
    public Ranks1 ranks { get; set; }
    public Fantasy_Points_Allowed1 fantasy_points_allowed { get; set; }
}

public class Ranks1
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class Fantasy_Points_Allowed1
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class wR
{
    public string team { get; set; }
    public Ranks2 ranks { get; set; }
    public Fantasy_Points_Allowed2 fantasy_points_allowed { get; set; }
}

public class Ranks2
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class Fantasy_Points_Allowed2
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class k
{
    public string team { get; set; }
    public Ranks3 ranks { get; set; }
    public Fantasy_Points_Allowed3 fantasy_points_allowed { get; set; }
}

public class Ranks3
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class Fantasy_Points_Allowed3
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class qB
{
    public string team { get; set; }
    public Ranks4 ranks { get; set; }
    public Fantasy_Points_Allowed4 fantasy_points_allowed { get; set; }
}

public class Ranks4
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class Fantasy_Points_Allowed4
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class tE
{
    public string team { get; set; }
    public Ranks5 ranks { get; set; }
    public Fantasy_Points_Allowed5 fantasy_points_allowed { get; set; }
}

public class Ranks5
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}

public class Fantasy_Points_Allowed5
{
    public string std { get; set; }
    public string half { get; set; }
    public string ppr { get; set; }
}
   
}
