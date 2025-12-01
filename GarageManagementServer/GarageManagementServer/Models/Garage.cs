using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GarageManagementServer.Models;

public partial class Garage
{
    [Key]
    public int _id { get; set; }

    public decimal? mispar_mosah { get; set; }

    public string? shem_mosah { get; set; }

    public decimal? cod_sug_mosah { get; set; }

    public string? sug_mosah { get; set; }

    public string? ktovet { get; set; }

    public string? yishuv { get; set; }

    public string? telephone { get; set; }

    public decimal? mikud { get; set; }

    public decimal? cod_miktzoa { get; set; }

    public string? miktzoa { get; set; }

    public string? menahel_miktzoa { get; set; }

    public decimal? rasham_havarot { get; set; }

    public string? TESTIME { get; set; }
}
