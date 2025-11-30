using System;
using System.Collections.Generic;

namespace GarageManagementServer.Models;

public partial class Garage
{
    public int Id { get; set; }

    public decimal? MisparMosah { get; set; }

    public string? ShemMosah { get; set; }

    public decimal? CodSugMosah { get; set; }

    public string? SugMosah { get; set; }

    public string? Ktovet { get; set; }

    public string? Yishuv { get; set; }

    public string? Telephone { get; set; }

    public decimal? Mikud { get; set; }

    public decimal? CodMiktzoa { get; set; }

    public string? Miktzoa { get; set; }

    public string? MenahelMiktzoa { get; set; }

    public decimal? RashamHavarot { get; set; }

    public string? Testime { get; set; }
}
