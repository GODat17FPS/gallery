package com.artgallery.repository;

import com.artgallery.model.ArtworkImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtworkImageRepository extends JpaRepository<ArtworkImage, Long> {
    List<ArtworkImage> findByArtworkId(Long artworkId);
}
