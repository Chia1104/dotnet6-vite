using dotnet6_vite.Dto.User;

namespace dotnet6_vite.Helpers;

using AutoMapper;
using dotnet6_vite.Entities;
using dotnet6_vite.Dto.Example;
using dotnet6_vite.Dto.Armor;
using dotnet6_vite.Dto.Headgear;
using dotnet6_vite.Dto.Shield;
using dotnet6_vite.Dto.Weapon;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<NewExample, Example>();
        CreateMap<UpdateExample, Example>()
            .ForAllMembers(x => x.Condition(
                (src, dest, prop) =>
                {
                    // ignore both null & empty string properties
                    if (prop == null) return false;
                    if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;

                    return true;
                }
            ));
        CreateMap<NewArmorDto, Armor>();
        CreateMap<NewHeadgearDto, Headgear>();
        CreateMap<NewShieldDto, Shield>();
        CreateMap<NewWeaponDto, Weapon>();
        CreateMap<LoginDto, User>();
        CreateMap<RegisterDto, User>();
        CreateMap<AuthResultDto, User>();
    }
}