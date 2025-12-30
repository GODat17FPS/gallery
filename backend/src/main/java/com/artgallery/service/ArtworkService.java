package com.artgallery.service;

import com.artgallery.dto.ArtworkDTO;
import com.artgallery.model.Artwork;
import com.artgallery.model.ArtworkImage;
import com.artgallery.repository.ArtworkImageRepository;
import com.artgallery.repository.ArtworkRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class ArtworkService {

    private final ArtworkRepository artworkRepository;
    private final ArtworkImageRepository artworkImageRepository;

    public ArtworkService(ArtworkRepository artworkRepository, ArtworkImageRepository artworkImageRepository) {
        this.artworkRepository = artworkRepository;
        this.artworkImageRepository = artworkImageRepository;
    }

    public List<ArtworkDTO> getAllArtworks() {
        return artworkRepository.findAllWithImages().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<ArtworkDTO> getArtworkById(Long id) {
        return artworkRepository.findByIdWithImages(id)
                .map(this::convertToDTO);
    }

    public List<String> getArtworkImages(Long artworkId) {
        return artworkImageRepository.findByArtworkId(artworkId).stream()
                .map(ArtworkImage::getImageUrl)
                .collect(Collectors.toList());
    }

    public List<ArtworkDTO> searchByTitle(String title) {
        return artworkRepository.findByTitleContainingIgnoreCase(title).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<ArtworkDTO> searchByArtist(String artist) {
        return artworkRepository.findByArtistContainingIgnoreCase(artist).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ArtworkDTO convertToDTO(Artwork artwork) {
        List<String> imageUrls = artwork.getImages().stream()
                .map(ArtworkImage::getImageUrl)
                .collect(Collectors.toList());

        return new ArtworkDTO(
                artwork.getId(),
                artwork.getTitle(),
                artwork.getArtist(),
                artwork.getDescription(),
                imageUrls);
    }
}
