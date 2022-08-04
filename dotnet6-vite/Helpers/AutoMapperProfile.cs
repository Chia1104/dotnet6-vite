namespace dotnet6_vite.Helpers;

using AutoMapper;
using dotnet6_vite.Entities;
using dotnet6_vite.Dto.Example;

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
    }
}