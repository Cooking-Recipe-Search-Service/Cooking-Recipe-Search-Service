package com.crss.crss.services;

import com.crss.crss.entities.CountryEntity;
import com.crss.crss.repositories.CountryRepository;
import com.crss.crss.repositories.FileSystemRepository;
import java.util.Base64;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class CountryService {

    private final FileSystemRepository fileSystemRepository;
    private final CountryRepository countryRepository;

    public List<CountryEntity> getAllCountries() {
        return countryRepository.findAll();
    }

    public String getCountryImageBase64ById(Long id) {
        return Base64.getEncoder().encodeToString(fileSystemRepository
            .findCountryImageInFileSystem(id));
    }

}
